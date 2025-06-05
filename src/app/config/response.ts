import { AppError } from "../interfaces/app-error";



export function createAppError(err: any): AppError {
    return {
      statusCode: err?.status || 500,
      errorMessage: err?.message || 'Error desconocido',
      dateTime: new Date()
    };
  }

  
