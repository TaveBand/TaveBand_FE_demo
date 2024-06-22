// src/__tests__/Login.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../routes/Login'; // 올바른 경로로 수정

// fetch를 모킹하여 실제 네트워크 요청을 보내지 않도록 설정
global.fetch = jest.fn((url, options) => {
  if (url === '/dailband/login') {
    return Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ message: '로그인 성공' }),
    });
  }
  if (url === '/dailband/userinfo') {
    return Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ userId: '12345' }),
    });
  }
  return Promise.reject(new Error('Unknown URL'));
});

describe('Login Component', () => {
  test('renders login form', () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    expect(screen.getByPlaceholderText('아이디를 입력해주세요')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('비밀번호를 입력해주세요')).toBeInTheDocument();
  });

  test('handles login', async () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    // 사용자 입력 이벤트 시뮬레이션
    fireEvent.change(screen.getByPlaceholderText('아이디를 입력해주세요'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('비밀번호를 입력해주세요'), {
      target: { value: 'testpassword' },
    });

    // 로그인 버튼 클릭 시뮬레이션
    fireEvent.click(screen.getByText('로그인'));

    // sessionStorage에 userId가 저장되는지 확인
    await waitFor(() => {
      expect(sessionStorage.getItem('userId')).toBe('12345');
    });

    // fetch가 두 번 호출되었는지 확인 (로그인 요청과 사용자 정보 요청)
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith('/dailband/login', expect.any(Object));
    expect(global.fetch).toHaveBeenCalledWith('/dailband/userinfo', expect.any(Object));
  });
});