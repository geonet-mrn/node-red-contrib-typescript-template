
import { AbstractNode } from 'nodered-typescript-essentials/AbstractNode'
import { NodeStatus, Shape, Fill } from 'nodered-typescript-essentials/node_status'


module.exports = function (RED: any) {

    class SampleNode extends AbstractNode {
     
        constructor(public config: any) {
            super(config, RED)          
        
            this.on('input', this.onInput);
        }

        onInput(msg: any) {}
    }

    RED.nodes.registerType("typescript-sample-node", SampleNode);
}