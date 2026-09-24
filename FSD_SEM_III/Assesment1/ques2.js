const EventEmitter=require('events');

class Element extends EventEmitter{
    constructor(name,parent=null){
        super();
        this.name=name;
        this.parent=parent;
    }

    addEventListener(type,handler){
        this.on(type,handler);
    }

    removeEventListener(type,handler){
        this.off(type,handler);
    }

    dispatchEvent(type,data){
        const event={
            type:type,
            target:this,
            currentTarget:null,
            data:data,
            stopped:false,
            stopPropagation(){
                this.stopped=true;
            }
        };

        let element=this;

        while(element){
            event.currentTarget=element;
            element.emit(type,event);

            if(event.stopped)
                break;

            element=element.parent;
        }
    }
}

const documentElement=new Element('document');
const form=new Element('form',documentElement);
const button=new Element('button',form);

const documentHandler=(event)=>{
    console.log(`document: target=${event.target.name}, currentTarget=${event.currentTarget.name}`);
};

const formHandler=(event)=>{
    console.log(`form: target=${event.target.name}, currentTarget=${event.currentTarget.name}`);
};

const buttonHandler=(event)=>{
    console.log(`button: target=${event.target.name}, currentTarget=${event.currentTarget.name}`);
};

documentElement.addEventListener('click',documentHandler);
form.addEventListener('click',formHandler);
button.addEventListener('click',buttonHandler);

console.log('Scenario A');
button.dispatchEvent('click',{message:'Button clicked'});

console.log('Scenario B');
form.removeEventListener('click',formHandler);
const stopHandler=(event)=>{
    console.log(`form: target=${event.target.name}, currentTarget=${event.currentTarget.name}`);
    event.stopPropagation();
};
form.addEventListener('click',stopHandler);
button.dispatchEvent('click',{message:'Button clicked'});

console.log('Scenario C');
button.removeEventListener('click',buttonHandler);
button.dispatchEvent('click',{message:'Button clicked'});

form.addEventListener('keypress',(event)=>{
    console.log(`keypress: target=${event.target.name}, currentTarget=${event.currentTarget.name}`);
});

console.log('Keypress');
form.dispatchEvent('keypress',{key:'Enter'});