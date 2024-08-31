import { setupWorker } from 'msw/browser';
import { loginWidgetHandlers } from '../widget/loginWidget/api/__mocks__/loginWidgetHandlers';
loginWidgetHandlers;
import { depatureArrivalHandlers } from '../entity/DepatureArrival/api/__mocks__/depatureArrivalHandlers';
import { flightTimeCitiesHandlers } from '../entity/FlightTimeCities/__mocks__/flightTimeHandlers';
import { timerResultlHandlers } from '../pages/result/api/__mocks__/timerResultlHandlers';
import { timerPostHandlers } from '../pages/timer/api/__mocks__/timerPostlHandlers';
import { flightRecordHandlers } from '../pages/flightRecord/__mocks__/flightRecordHandlers';

export const worker = setupWorker(
  ...loginWidgetHandlers,
  ...depatureArrivalHandlers,
  ...flightTimeCitiesHandlers,
  ...timerResultlHandlers,
  ...timerPostHandlers,
  ...flightRecordHandlers,
);
