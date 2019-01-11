import React from 'react';
import { AmountInput } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
  display: inline-block;
`;
const InputWrapper = styled.div`
  margin-right: 10px;
  display: inline-block;
`;

const onChange = cmpName => (value: any) => {};
export default class SizeAmountInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
    return (
      <Wrapper>
        <InputWrapper>
          <AmountInput size={'small'} placeholder={'请填写金额'} />
        </InputWrapper>
        <InputWrapper>
          <AmountInput placeholder={'请填写金额'} />
        </InputWrapper>
        <InputWrapper>
          <AmountInput size={'large'} placeholder={'请填写金额'} />
        </InputWrapper>
      </Wrapper>
    );
  }
}
