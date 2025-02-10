export type Project = {
  id: string;
  title: string;
  link: string;
  linkGitHub?: string;
  tech: string;
  type: string;
  img?: string;
};

export type Client = {
  id: string;
  title: string;
  link: string;
  img?: string;
};

export type ArrButtons = Array<string>;
