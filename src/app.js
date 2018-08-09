import React, { Component } from "react";
// import { connect } from "react-redux";
import { connect } from "./my-react-redux";

import { saveMoney, widthdrawMoney, p2pWidthdraw } from "./saving";

const mapPropsToState = saving => ({
  saving
});

const mapDispatchToProps = {
  saveMoney,
  widthdrawMoney,
  p2pWidthdraw
};

class app extends Component {
  render() {
    const { saving, saveMoney, widthdrawMoney, p2pWidthdraw } = this.props;
    return (
      <div>
        <div>
          <span>小明</span>
          ¥:<input type="text" value={saving} />
        </div>
        <button onClick={saveMoney}>存钱</button>
        <button onClick={widthdrawMoney}>取钱</button>
        <button onClick={p2pWidthdraw}>P2P取钱</button>
        <div />
      </div>
    );
  }
}

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(app);
