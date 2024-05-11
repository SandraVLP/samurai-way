
export type PostType = {

  id: number;
  message: string;
  likesCount: number;
};

type DialogType = {
  id: number;
  name: string;
};

type messageType = {
  id: number;
  message: string;
};



export type ProfilePageType = {
  posts: Array<PostType>;
};

export type DialogsPageType = {
  dialogs: Array<DialogType>;
  messages: Array<messageType>;
};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;

};

let state: RootStateType = {
  profilePage: {
    posts: [
      {
        id: 1,
        message: "Post1",
        likesCount: 2,
      },
      {
        id: 2,
        message: "Post2",
        likesCount: 5,
      },
      {
        id: 3,
        message: "Post3",
        likesCount: 10,
      },
    ],
  },
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: "Sasha",
      },
      {
        id: 2,
        name: "Ivan",
      },
      {
        id: 3,
        name: "Sveta",
      },
    ],
    messages: [
      {
        id: 1,
        message: "Hi",
      },
      {
        id: 2,
        message: "How are you",
      },
      {
        id: 3,
        message: "Bye",
      },
    ],
  },
};



export default state;
