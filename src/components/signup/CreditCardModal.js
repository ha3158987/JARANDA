import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { CustomInput, CustomButton } from 'elements';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px 32px;

  gap: 0 10px;
  margin-bottom: 15px;

  div {
    display: flex;
    gap: 0 20px;
  }
`;

const CloseBtn = styled.div`
  margin-left: auto;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ErrorMessage = styled.div`
  margin: 0 auto;
  color: red;
  text-align: center;
`;

const CreditCardModal = ({ open, close, setUserInfo, cardValidation }) => {
  const [cardNum, setCardNum] = useState('');
  const [expiredDate, setExpiredDate] = useState('');
  const [cvc, setCvc] = useState('');

  const [cardNumError, setCardNumError] = useState('');
  const [expiredDateError, setExpiredDateError] = useState('');
  const [cvcError, setCvcError] = useState('');

  useEffect(() => {
    if (expiredDate.length === 4) {
      setExpiredDate(
        expiredDate.replace(/-/g, '').replace(/(\d{2})(\d{2})/, '$1/$2'),
      );
    }
  }, [cardNum, expiredDate]);

  const cardInfoChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'cardNum':
        const regex = /^[0-9\b -]{0,16}$/;
        if (regex.test(value)) {
          setCardNum(value);
        }
        break;
      case 'expiredDate':
        const regex2 = /^[0-9\b -]{0,4}$/;
        if (regex2.test(value)) {
          setExpiredDate(value);
        }
        break;
      case 'cvc':
        const regex3 = /^[0-9\b -]{0,3}$/;
        if (regex3.test(value)) {
          setCvc(value);
        }
        break;
      default:
    }
  };
  const checkValidation = e => {
    const { name } = e.target;
    const optinos = {
      cardNum: setCardNumError(cardValidation(cardNum, name).message),
      expDate: setExpiredDateError(cardValidation(expiredDate, name).message),
      cvc: setCvcError(cardValidation(cvc, name).message),
    };
    optinos[name] && optinos[name]();
  };

  const setCardInfo = () => {
    setUserInfo(prev => {
      prev.cardInfo = {
        cardNum,
        expiredDate,
        cvc,
      };
      return prev;
    });
    setCardNum('');
    setExpiredDate('');
    setCvc('');
    close();
  };

  return (
    <>
      {open ? (
        <ModalContainer>
          <ModalBox>
            <CloseBtn onClick={close}>X</CloseBtn>
            <CustomInput
              type="text"
              name="cardNum"
              placeholder="신용카드 번호"
              value={cardNum}
              onChange={cardInfoChange}
              onBlur={checkValidation}
            />
            {cardNumError && <ErrorMessage>{cardNumError}</ErrorMessage>}
            <div>
              <Box>
                <CustomInput
                  type="text"
                  name="expiredDate"
                  placeholder="신용카드 만료일 (MM/YY)"
                  value={expiredDate}
                  onChange={cardInfoChange}
                  onBlur={checkValidation}
                />

                {expiredDateError && (
                  <ErrorMessage style={{ marginTop: '14px' }}>
                    {expiredDateError}
                  </ErrorMessage>
                )}
              </Box>
              <Box>
                <CustomInput
                  type="number"
                  name="cvc"
                  minLength={3}
                  maxLength={3}
                  placeholder="신용카드 CVC"
                  value={cvc}
                  onChange={cardInfoChange}
                  onBlur={checkValidation}
                />
                {cvcError && (
                  <ErrorMessage style={{ marginTop: '14px' }}>
                    {cvcError}
                  </ErrorMessage>
                )}
              </Box>
            </div>
            <CustomButton onClick={setCardInfo}>카드 등록</CustomButton>
          </ModalBox>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default CreditCardModal;