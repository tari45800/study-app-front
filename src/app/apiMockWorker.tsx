import { setupWorker } from 'msw/browser';
import { mainTodoHandlers } from '../widget/mainTodo/api/__mocks__/mainTodoHandlers';
import { loginWidgetHandlers } from '../widget/loginWidget/api/__mocks__/loginWidgetHandlers';
loginWidgetHandlers;
export const worker = setupWorker(...mainTodoHandlers, ...loginWidgetHandlers);
