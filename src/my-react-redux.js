import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from './my-redux';

export class Provider extends Component {
    static childContextTypes = {
        store: PropTypes.object,
    }
    getChildContext() {
        return { store:this.props.store};
    }
    render() { 
        return this.props.children;
    }
}

export function connect(mapPropsToState,mapDispatchToProps) {
    return (WrapComponent) => {
        return class ChildComponent extends Component {
            static contextTypes = {
                store:PropTypes.object,
            }
    
            constructor(props,context) {
                super(props,context);
                this.state = {
                    props: {}
                }
            }

            componentDidMount () {
              const { store } = this.context;
              this.update();
              store.subscribe(this.update.bind(this));
            }
            
            update(){
                const { store } = this.context;
                const stateProps = mapPropsToState(store.getState());
            
                const dispatchProps = bindActionCreators(mapDispatchToProps ,store.dispatch)
  
                this.setState({
                    props: {
                      ...this.state.props,
                      ...stateProps,
                      ...dispatchProps,
                  }
                })
            }
            render(){
                return <WrapComponent {...this.state.props}/>
            }
        }
    }
}