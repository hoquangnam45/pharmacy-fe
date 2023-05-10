import { Component } from 'react';

type Props = Record<string, never>;

type State = Record<string, never>;

export default class LoginComponent extends Component<Props, State> {
  state = {};

  render() {
    return <div>Login</div>;
  }
}
