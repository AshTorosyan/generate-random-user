const Input = (props) => {
    return (
        <input 
          className={props.className}
                ref={props.propsRef}
               type={props.type}
               onChange={props.onChange}
               placeholder={props.placeholder}
        />
    );
}

export default Input;