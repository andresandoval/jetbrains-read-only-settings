#set( $CamelCaseName = "" )
#set( $part = "" )
#foreach($part in $NAME.split("-"))
    #set( $CamelCaseName = "${CamelCaseName}$part.substring(0,1).toUpperCase()$part.substring(1).toLowerCase()" )
#end
import {IModule} from 'angular';
import {DeclarationHelper} from '@common/utils/declaration-helper';

export const ${CamelCaseName}Module: IModule = DeclarationHelper.module('${NAME}').buildAndExport();