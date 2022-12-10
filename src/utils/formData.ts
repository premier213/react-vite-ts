interface StateType {
  name: string;
  family: string;
  mobile: string;
  birthDate: string;
  address: string;
  avatar: string;
}

type ActionType =
  | { type: "HANDLE_INPUT_CHANGE"; field: string; payload: string }
  | { type: "RESET" };

export const formReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "HANDLE_INPUT_CHANGE":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "RESET":
      return initialInput;

    default:
      return state;
  }
};

export const initialInput = {
  name: "",
  family: "",
  mobile: "",
  birthDate: "",
  address: "",
  avatar: "",
};
