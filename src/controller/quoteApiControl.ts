import { Request, Response } from 'express'
import * as quoteGenerator from '../services/quote'
import { valueInput, Quote } from '../types/Interface'

export const getAllQuotes = (req: Request, res: Response) => {
  const quotes = quoteGenerator.getAllQuotes()
  res.send(quotes)
}

export const createAQuote = (req: Request, res: Response) => {
  const input: valueInput = {
    carValue: req.body.carValue,
    riskRating: req.body.riskRating,
  }
  const newQuote = quoteGenerator.createAQuote(input)

  res.send(newQuote)
}

export const pullUpAQuote = (req: Request, res: Response) => {
  const quoteId = parseInt(req.params.id)

  try {
    const matchedQuote = quoteGenerator.pullUpAQuote(quoteId)
    res.send(matchedQuote)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const deleteAQuote = (req: Request, res: Response) => {
  const quoteId = parseInt(req.params.id)

  try {
    const quoteDeleted = quoteGenerator.deleteAQuote(quoteId)
    if (quoteDeleted) {
      res.send(`Task ${quoteId} deleted successfully!`)
    } else {
      res.status(500).send(`Task ${quoteId} deletion failed!`)
    }
  } catch (e) {
    res.status(404).send(e)
  }
}

export const updateAQuote = (req: Request, res: Response) => {
  const quoteId = parseInt(req.params.id)

  const carValue = req.body.carValue
  const riskRating = req.body.riskRating

  try {
    const updatedQuote = quoteGenerator.updateAQuote(quoteId, {
      carValue,
      riskRating,
    })
    res.send(updatedQuote)
  } catch (e) {
    res.status(404).send(e)
  }
}
