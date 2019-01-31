#set( $CamelCaseName = "" )
#set( $part = "" )
#foreach($part in $NAME.split("-"))
    #set( $CamelCaseName = "${CamelCaseName}$part.substring(0,1).toUpperCase()$part.substring(1).toLowerCase()" )
#end
import template from './${NAME}.component.html';
import './${NAME}.component.scss';
import {Component} from '@common/utils/ng-objects';
import {MODAL_COMPONENT_BINDINGS, ModalComponentController} from '@common/model/modal-component-controller';

interface I${CamelCaseName}ComponentBindings {
}

@Component({
    selector: '${NAME}',
    controllerAs: 'ctrl',
    template: template,
    bindings: MODAL_COMPONENT_BINDINGS,
    providers: []
})
export class ${CamelCaseName}Component extends ModalComponentController<I${CamelCaseName}ComponentBindings>  {

    constructor() {
     super();
    }

    public \$onInit(): void {
    }
}