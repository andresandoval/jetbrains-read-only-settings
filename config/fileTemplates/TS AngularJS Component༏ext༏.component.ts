#set( $CamelCaseName = "" )
#set( $part = "" )
#foreach($part in $NAME.split("-"))
    #set( $CamelCaseName = "${CamelCaseName}$part.substring(0,1).toUpperCase()$part.substring(1).toLowerCase()" )
#end
import template from './${NAME}.component.html';
import './${NAME}.component.scss';
import {IComponentController} from 'angular';
import {Component} from '@common/utils/ng-objects';

interface I${CamelCaseName}Component extends  IComponentController{
}

@Component({
    selector: '${NAME}',
    controllerAs: 'ctrl',
    template: template,
    providers: [],
    bindings: {}
})
export class ${CamelCaseName}Component implements I${CamelCaseName}Component {

    constructor() {
    }

    public \$onInit(): void {
    }
}