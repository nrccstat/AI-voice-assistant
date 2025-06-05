import {
  useVoiceAssistant,
  BarVisualizer,
  VoiceAssistantControlBar,
  useTrackTranscription,
  useLocalParticipant,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useState } from "react";
import "./SimpleVoiceAssistant.css";

const ChatMessage = ({ messageType, messageContent }) => {
  return (
    <div className="message">
      <strong className={`message-${messageType}`}>
        {messageType === "agent" ? "AI Assistant: " : "You: "}
      </strong>
      <span className="message-text">{messageContent}</span>
    </div>
  );
};

const SimpleVoiceAssistant = () => {
  const { state: assistantState, audioTrack, agentTranscriptions } = useVoiceAssistant();
  const localParticipant = useLocalParticipant();
  const { segments: userTranscriptions } = useTrackTranscription({
    publication: localParticipant.microphoneTrack,
    source: Track.Source.Microphone,
    participant: localParticipant.localParticipant,
  });

  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const combinedMessages = [
      ...(agentTranscriptions?.map((transcription) => ({ 
        ...transcription, 
        type: "agent" 
      })) ?? []),
      ...(userTranscriptions?.map((transcription) => ({ 
        ...transcription, 
        type: "user" 
      })) ?? []),
    ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);
    
    setChatHistory(combinedMessages);
  }, [agentTranscriptions, userTranscriptions]);

  return (
    <div className="voice-assistant-container">
      <div className="visualizer-container">
        <BarVisualizer 
          state={assistantState} 
          barCount={7} 
          trackRef={audioTrack} 
        />
      </div>
      <div className="control-section">
        <VoiceAssistantControlBar />
        <div className="conversation">
          {chatHistory.map((message, index) => (
            <ChatMessage 
              key={message.id || index} 
              messageType={message.type} 
              messageContent={message.text} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleVoiceAssistant;
