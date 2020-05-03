import React, { useState, useReducer } from 'react'

interface State {
  isLoading: Boolean
  error: Error | null
  number: Number
}

type Action =
  | { type: 'start' }
  | { type: 'finish' }
  | { type: 'error'; error: Error }
  | { type: 'getNumber'; number: Number }

const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        isLoading: true
      }

    case 'error':
      return {
        ...state,
        error: action.error
      }
    case 'getNumber':
      return {
        ...state,
        number: action.number
      }
    case 'finish':
      return {
        ...state,
        isLoading: false
      }
  }
}

export const MyUseReducerOriginal: React.FC = () => {
  const [state, dispatch] = useReducer(stateReducer, { isLoading: false, error: null, number: 0 })

  const getNumber = async () => {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        const number = Math.floor(Math.random() * 100)
        if (number > 50) {
          reject(new Error('There was an error'))
        }
        resolve(number)
      }, 1000)
    })
  }

  const handleClick = async () => {
    try {
      dispatch({ type: 'start' })
      dispatch({ type: 'getNumber', number: await getNumber() })
    } catch (e) {
      dispatch({ type: 'error', error: new Error('an error occurred') })
    } finally {
      dispatch({ type: 'finish' })
    }
  }

  if (state.isLoading) {
    return <p>Loading</p>
  }

  return (
    <div>
      {state.error !== null && <p>{state.error.message}</p>}
      <button onClick={handleClick}>{state.number}</button>
    </div>
  )
}
