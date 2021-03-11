type Url = {
  uri: string;
};

export type Exercise = {
  name: string;
  instruction: string;
  image: Url;
  video: Url;
};

export type Workout = {
  id: string;
  name: string;
  exercises: Exercise[];
  coverImage: Url;
  finished?: boolean;
};
