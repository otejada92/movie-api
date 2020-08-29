import expressWinston from 'express-winston';
import winston from 'winston';

export const debugLogger = expressWinston.logger({
    transports: [
        new winston.transports.Console()
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),    
      meta: false,
      msg: "HTTP {{req.method}} {{req.url}}", 
      expressFormat: true, 
      colorize: true
});

export const errorLogger = expressWinston.errorLogger({
    transports: [
      new winston.transports.Console()
    ],
    meta: false,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    msg: "HTTP {{req.method}} {{req.url}}" 
  });