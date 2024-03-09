export type NavUrlType = {
  name: string;
};

export type ExplorationCardsTypes = {
  url: string;
  alt: string;
  name: string;
  description: string;
};

export type AlertCardsTypes = {
  name: string;
  icon: string;
  description: string;
  buttonText: string;
};

export type SearchTypes = {
  placeholder: string;
  searchText: string;
  onChange: (props: any) => void;
  width?: string;
};

export type FeaturedJobsTypes = {
  name: string;
  category: string;
  type: string;
  location: string;
  datePosted: string;
  description: string;
  comments: number;
  width?:string;
};

export type FeatureCategoriesTypes = {
  name: string;
  onChange?: () => void;
};

export type FilterJobsTypes = {
  id?: string;
  label: string;
  onChange: (props: any) => void;
};

export type SloganType = {
  title?:string;
  beginningText?:string;
  endingText?:string;
  middleText?: string;
  slogan: string;
}

export type SloganWithCategoryType = {
  title: string;
  category: string;
  type: string;
  location: string;
  datePosted: string;
  comments: number;
  slogan: string;
};


export type JobDescriptionTypes = {
  about:string;
  responsibility:string[];
  qualifications:string[];
  benefits:string[];
  comments:commentType[];
  remark:string;
}

export type commentType ={
  name:string;
  comment:string;
  timeline:string;
}