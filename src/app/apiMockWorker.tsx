import { setupWorker } from 'msw/browser';
import { mainTodoHandlers } from '../widget/mainTodo/api/__mocks__/mainTodoHandlers';
import { loginWidgetHandlers } from '../widget/loginWidget/api/__mocks__/loginWidgetHandlers';
loginWidgetHandlers;
import { depatureArrivalHandlers } from '../entity/DepatureArrival/api/__mocks__/depatureArrivalHandlers';
import { flightTimeCitiesHandlers } from '../entity/FlightTimeCities/__mocks__/flightTimeHandlers';
export const worker = setupWorker(
  ...mainTodoHandlers,
  ...loginWidgetHandlers,
  ...depatureArrivalHandlers,
  ...flightTimeCitiesHandlers,
);
