export interface Education {
  certificate: string;
  university: string;
}

export interface Marriage {
  children: number;
  married: boolean;
  spouse_name: string;
}

export interface OnlineInfo {
  email: string;
  ip_address: string;
  ipv6_address: string;
  password: string;
  password_md5: string;
  user_agent: string;
  username: string;
}

export interface Personal {
  age: number;
  blood: string;
  born?: any;
  born_place: string;
  cellphone: string;
  city: string;
  country: string;
  eye_color: string;
  father_name: string;
  gender: string;
  height: string;
  last_name: string;
  name: string;
  national_code: string;
  religion: string;
  system_id: string;
  weight: number;
}

export interface Work {
  country_code: string;
  insurance: boolean;
  position: string;
  salary: string;
}

export interface PersonInfo {
  education: Education;
  marriage: Marriage;
  online_info: OnlineInfo;
  personal: Personal;
  work: Work;
}

export interface Person {
  person: PersonInfo;
}
