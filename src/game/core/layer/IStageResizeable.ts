interface IStageResizeable {
	resize(w:number,h:number):void;
}

function instanceOfIStageResizeable(object: any): object is IStageResizeable {
    return 'resize' in object;
}