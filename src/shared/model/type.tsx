export interface arrivalInfoType {
  arrival: string;
  city: string;
  airport: string;
  time: string;
  gonfalonImg: string;
}

export interface TodoType {
  todoId: number;
  todoContent: string;
  todoState: boolean;
}

export interface FlightResultType {
  arrivalInfo: arrivalInfoType;
  arrivalTime: string;
  delayTime: string;
  departureTime: string;
  flightTime: string;
  todos: TodoType[];
}
