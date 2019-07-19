

const AddFriend =(props) => {
    return (
        <Formik
        initialValues={{
        name:'',
        age:'',
        email:''
    }}
            onSubmit={{values, actions}} => {
            actions.setSubmitting(true);
        }

   
        <Form style={{display:'flex', flexDirection:'column', alignItems:'center'}} onSubmit={props.handleSubmit}            <Form.Field
            control={Input}
            label='name'
            name='name'
            id='name'
            type='text'
            onChange={props.handleChange}
            width='4'
            />
            <Form.Field
            control={Input}
            label='password'
            name='password'
            id='password'
            type='text'
            onChange={props.handleChange}
            width='4'
            />
        />
    )
}
