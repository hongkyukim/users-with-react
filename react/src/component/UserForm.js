import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ initValues, btnConfig, onSubmit, onCancel }) => {
	return (
		<Formik
			enableReinitialize={true}
			initialValues={{
				taskName: initValues.taskName,
				description: initValues.description
			}}
			onSubmit={(values, { resetForm }) => {
				onSubmit(values);

				document.activeElement.blur();
				resetForm();
			}}
			onReset={() => onCancel()}
			validationSchema={Yup.object().shape({
				taskName: Yup.string().required('Please provide a task name'),
				description: Yup.string().required('Please provide a description')
			})}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleSubmit,
				handleBlur,
				handleReset,
				isSubmitting
			}) => {
				return (
					<form className="col s12" autoComplete="off" onSubmit={handleSubmit}>
						<div className="row">
							<div className="col s6">
								<label>User Name</label>
								<input
									id="taskName"
									name="taskName"
									type="text"
									maxLength="25"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.taskName}
								/>
								{errors.taskName && touched.taskName && (
									<div className="red-text">{errors.taskName}</div>
								)}
							</div>
						</div>
						<div className="row">
							<div className="col s12">
								<label>Email</label>
								<input
									id="description"
									name="description"
									type="text"
									maxLength="50"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.description}
								/>

								{errors.description && touched.description && (
									<div className="red-text">{errors.description}</div>
								)}
							</div>
						</div>
						<div className="row">
							<button
								className="btn red"
								type="button"
								disabled={isSubmitting}
								onClick={handleReset}
							>
								Cancel
							</button>
							<button
								className="btn right"
								type="submit"
								disabled={isSubmitting}
							>
								<i className="material-icons right">{btnConfig}</i>
								{btnConfig}
							</button>
						</div>
					</form>
				);
			}}
		</Formik>
	);
};

export default UserForm;
