#set( $CamelCaseName = "" )
#set( $part = "" )
#foreach($part in $NAME.split("-"))
    #set( $CamelCaseName = "${CamelCaseName}$part.substring(0,1).toUpperCase()$part.substring(1).toLowerCase()" )
#end
import {IDirective, IDirectiveFactory, IScope, IDirectiveLinkFn} from 'angular';
import template from './${NAME}.directive.html';
import {Directive} from '@common/utils/ng-objects';

interface ${CamelCaseName}Scope extends IScope {
}

@Directive({
    name: '${NAME}'
})
export class ${CamelCaseName}Directive implements IDirective {

    public readonly restrict = 'AE';
    public readonly scope = {};
    public readonly template = template;

    constructor() {
    }

    public link: IDirectiveLinkFn<${CamelCaseName}Scope> = (scope: ${CamelCaseName}Scope, element: JQLite) => {
    };
}