/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lead {
  id: string;
  name: string;
  phone: string;
  source: string; // "Google Maps" | "Group Facebook" | "Fanpage Đối Thủ" | "Khác"
  details?: string;
  status: 'new' | 'contacted' | 'interested' | 'not-interested' | 'booked';
  createdAt: string;
}

export interface fbGroup {
  id: string;
  name: string;
  members: string;
  category: string;
  isSelected?: boolean;
}

export interface SendingCampaign {
  id: string;
  template: string;
  targetCount: number;
  successCount: number;
  failedCount: number;
  status: 'idle' | 'sending' | 'completed' | 'paused';
  logs: string[];
}

export interface FanpageMessage {
  id: string;
  senderName: string;
  senderAvatar: string;
  messageText: string;
  pageName: string;
  timestamp: string;
  isReplied: boolean;
  replyText?: string;
}

export interface DemoLeadRequest {
  fullName: string;
  phone: string;
  carBrand: string;
  packageType: 'combo' | 'facebook' | 'zalo';
  status: 'pending' | 'success';
}

