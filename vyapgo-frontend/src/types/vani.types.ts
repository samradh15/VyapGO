export interface AudioVisualizationData {
  frequencyData: Uint8Array;
  timeData: Uint8Array;
  volume: number;
  pitch: number;
  clarity: number;
  timestamp: number;
}

export interface VoiceRecordingConfig {
  sampleRate: number;
  channels: number;
  bitRate: number;
  format: "webm" | "mp4";
  maxDuration: number;
  chunkSize: number;
  noiseReduction: boolean;
  echoCancellation: boolean;
}

export interface VoiceRecordingState {
  status: "idle" | "recording" | "paused" | "processing" | "error";
}