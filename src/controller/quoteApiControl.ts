import { Request, Response } from "express";
import * as quoteGenerator from "../quoteGenerator/quote";
import { valueInput } from "../types/interfaces";

export const getAllQuotes = (req: Request, res: Response) => {
  const quotes = quoteGenerator.getAllQuotes();
  res.send(quotes);
};

export const createAQuote = (req: Request, res: Response) => {
  const input: valueInput = {
    carValue: req.body.carValue,
    riskRating: req.body.riskRating,
  };
  const newQuote = quoteGenerator.createAQuote(input);

  res.send(newQuote);
};

//   export const getOneTask = (req, res) => {
//     const taskId = parseInt(req.params.id)

//     try {
//       const matchedTask = taskService.getOneTask(taskId)
//       res.send(matchedTask)
//     } catch (e) {
//       res.status(404).send(e)
//     }
//   }

//   export const deleteTask = (req, res) => {
//     const taskId = parseInt(req.params.id)

//     try {
//       const hasDeleted = taskService.deleteTask(taskId)
//       if (hasDeleted) {
//         res.send(`Task ${taskId} deleted successfully!`)
//       } else {
//         res.status(500, send(`Task ${taskId} deletion failed!`))
//       }
//     } catch (e) {
//       res.status(404).send(e)
//     }
//   }

//   export const updateTask = (req, res) => {
//     const taskId = parseInt(req.params.id)

//     const name = req.body.name
//     const description = req.body.description

//     try {
//       const updatedTask = taskService.updateTask({
//         id: taskId,
//         name,
//         description,
//       })
//       res.send(updatedTask)
//     } catch (e) {
//       res.status(404).send(e)
//     }
//   }

//   export const updateTaskPartial = (req, res) => {
//     const taskId = parseInt(req.params.id)

//     const name = req.body.name
//     const description = req.body.description

//     try {
//       const updatedTask = taskService.updateTaskPartial({
//         id: taskId,
//         name,
//         description,
//       })
//       res.send(updatedTask)
//     } catch (e) {
//       res.status(404).send(e)
//     }
// }
