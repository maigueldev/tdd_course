import { ContractModel, ContractPrime } from '../models/contract-model'

describe('Contract class', () => {
  it('Test contract regular for 12 month', () => {
    const contract = new ContractModel({
      id: '#001',
      date_init: new Date(2021),
      expiration_date: new Date(2022),
      month: 12,
      monthly_cost: 500
    })

    expect(contract.getId()).toBe('#001')
    expect(contract.getDateInit()).toEqual(new Date(2021))
    expect(contract.getExpirationDate()).toEqual(new Date(2022))
    expect(contract.getMonth()).toBe(12)
    expect(contract.getMonthlyCost()).toBe(500)
  })

  it('Test contract for Prime Contract', () => {
    const contract = new ContractPrime({
      id: '#001',
      date_init: new Date(2021),
      expiration_date: new Date(2022),
      month: 24,
      monthly_cost: 500
    })

    expect(contract.monthlyDiscount()).toBe(50)
  })
})
