import React, { Component } from 'react';

import Bar from './components/Bar/Bar';
import DisabledInput from './components/Input/DisabledInput';

import { calculateSalaryFrom } from './helpers/salary';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: {
        baseINSS: '',
        discountINSS: '',
        baseIRPF: '',
        discountIRPF: '',
        netSalary: '',
      },
    };
  }

  handleSalaryValue = (e) => {
    const fullSalary = calculateSalaryFrom(e.target.value);

    this.setState({ fullSalary });
  };

  returnFormatedValue = (value) => {
    return `R$ ${new Intl.NumberFormat('pt-br').format(value)}`;
  };

  returnPercentage = (value) => {
    const percentage = (value * 100) / this.state.fullSalary.baseINSS;

    return percentage.toFixed(2);
  };

  render() {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = this.state.fullSalary;

    return (
      <div className="container">
        <h1>Calculadora CLT</h1>
        <div className="inputContainer">
          <div className="row">
            <div className="col s12">
              <label htmlFor="salary">Salário Bruto</label>
              <input
                id="salary"
                type="number"
                onChange={this.handleSalaryValue}
              />
            </div>
          </div>
          <div className="row">
            <DisabledInput
              id="inssBase"
              text="Base INSS:"
              value={baseINSS ? this.returnFormatedValue(baseINSS) : ''}
              className="base"
            />
            <DisabledInput
              id="inssDiscount"
              text="Desconto INSS:"
              value={
                discountINSS
                  ? `${this.returnFormatedValue(
                      discountINSS
                    )} (${this.returnPercentage(discountINSS)}%)`
                  : ''
              }
              className="discountINSS"
            />
            <DisabledInput
              id="irpfBase"
              text="Base IRPF:"
              value={baseIRPF ? this.returnFormatedValue(baseIRPF) : ''}
              className="base"
            />
            <DisabledInput
              id="irpfDiscount"
              text="Desconto IRPF:"
              value={
                discountIRPF
                  ? `${this.returnFormatedValue(
                      discountIRPF
                    )} (${this.returnPercentage(discountIRPF)}%)`
                  : ''
              }
              className="discountIRPF"
            />
          </div>
          <div className="row">
            <DisabledInput
              id="netSalary"
              text="Salário Líquido:"
              value={
                netSalary
                  ? `${this.returnFormatedValue(
                      netSalary
                    )} (${this.returnPercentage(netSalary)}%)`
                  : ''
              }
              className="netSalary"
            />
          </div>
          <div className="bar">
            <Bar value={this.returnPercentage(discountINSS)} color="#e67e22" />
            <Bar value={this.returnPercentage(discountIRPF)} color="#c0392b" />
            <Bar value={this.returnPercentage(netSalary)} color="#16a085" />
          </div>
        </div>
      </div>
    );
  }
}
