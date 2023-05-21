import * as carService from '../services/carService'
import { Request, Response } from 'express'

export const getAllCars = (req: Request, res: Response) => {
  const carRecords = carService.getAllCars()
  res.send(carRecords)
}

export const addCar = (req: Request, res: Response) => {
  try {
    const model = req.body.model
    const year = req.body.year
    const input = {
      model: model,
      year: year,
    }
    const newInput = carService.addCar(input)
    res.send(newInput)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const getOneCar = (req: Request, res: Response) => {
  const carID = parseInt(req.params.id)

  try {
    const response = carService.getOneCar(carID)
    res.send(response)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const updateCar = (req: Request, res: Response) => {
  try {
    const carID = parseInt(req.params.id)
    const model = req.body.model
    const year = req.body.year

    const input = {
      model: model,
      year: year,
    }

    const response = carService.updateCar(carID, input)

    res.send(response)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const patchCar = (req: Request, res: Response) => {
  try {
    const carID = parseInt(req.params.id)
    const model = req.body.model
    const year = req.body.year

    const response = carService.patchCar(carID, model, year)

    res.send(response)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const deleteCar = (req: Request, res: Response) => {
  try {
    const carID = parseInt(req.params.id)
    const response = carService.deleteCar(carID)
    res.send(response)
  } catch (e) {
    res.status(404).send(e)
  }
}
