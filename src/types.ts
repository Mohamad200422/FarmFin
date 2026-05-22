export type Language = 'en' | 'hi';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export interface PartnerForm {
  name: string;
  org: string;
  email: string;
  phone: string;
  role: 'ngo' | 'fpo' | 'govt' | 'investor' | 'other';
  message: string;
}

export interface RegisterInterestForm {
  name: string;
  phone: string;
  village: string;
  district: string;
  acres: string;
  cropInterest: string;
}
