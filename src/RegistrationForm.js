import React, { useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from "@mui/material/InputAdornment"; 
import { Source } from "@mui/icons-material";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { inputFormElements } from "./FormElements" 


const theme = createTheme();

function RegistrationForm() {

  const initialValues = {
    gender: '',
    civilStatus: '',
  };
  
  const initialEduQualification = {
    exam: '',
    stream: '',
    year: '',
  };

  const initialHigherEduQualification = {
    prefix: '',
    degree: '',
    location: '',
    start: '',
    end: '',
  };

  const initialProfQualification = {
    course: '',
    institution: '',
    location: '',
    start: '',
    end: '',
  };

  const initialProfMembership = {
    membership: '',
    organization: '',
    year: '',
  };

  const initialWorkExperience = {
    company: '',
    designation: '',
    location: '',
    start: '',
    end: '',
    description: '',
  };

  const initialCareerSummary = {
    totalYearsOfExperience: '',
    itLiteracy: '',
  };
  

//-----------
  const [data, setData] = useState(initialValues);
  const [eduQualifications, setEduQualifications] = useState([initialEduQualification]);
  const [higherEduQualifications, setHigherEduQualifications] = useState([initialHigherEduQualification]);
  const [profQualifications, setProfQualifications] = useState([initialProfQualification]);
  const [profMemberships, setProfMemberships] = useState([initialProfMembership]);
  const [workExperiences, setWorkExperiences] = useState([initialWorkExperience]);
  const [careerSummaries, setCareerSummaries] = useState([initialCareerSummary]);


//------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  

//--------------
  const handleEduQualificationsChange = (index, field, value) => {
    const updatedEduQualifications = [...eduQualifications];
    updatedEduQualifications[index] = {
      ...updatedEduQualifications[index],
      [field]: value,
    };
    setEduQualifications(updatedEduQualifications);
  };

  const handleHigherEduQualificationsChange = (index, field, value) => {
    const updatedHigherEduQualifications = [...higherEduQualifications];
    updatedHigherEduQualifications[index] = {
      ...updatedHigherEduQualifications[index],
      [field]: value,
    };
    setHigherEduQualifications(updatedHigherEduQualifications);
  };

  const handleProfQualificationsChange = (index, field, value) => {
    const updatedProfQualifications = [...profQualifications];
    updatedProfQualifications[index] = {
      ...updatedProfQualifications[index],
      [field]: value,
    }
    setProfQualifications(updatedProfQualifications);
  };

  const handleProfMembershipsChange = (index, field, value) => {
    const updatedProfMemberships = [...profMemberships];
    updatedProfMemberships[index] = {
      ...updatedProfMemberships[index],
      [field]: value,
    }
    setProfMemberships(updatedProfMemberships);
  };

  const handleWorkExperiencesChange = (index, field, value) => {
    const updatedWorkExperiences = [...workExperiences];
    updatedWorkExperiences[index] = {
      ...updatedWorkExperiences[index],
      [field]: value,
    }
    setWorkExperiences(updatedWorkExperiences);
  };

  const handleCareerSummariesChange = (index, field, value) => {
    const updatedCareerSummaries = [...careerSummaries];
    updatedCareerSummaries[index] = {
      ...updatedCareerSummaries[index],
      [field]: value,
    }
    setCareerSummaries(updatedCareerSummaries);
  };



 //----- 
  const handleAddEduQualification = () => {
    setEduQualifications([...eduQualifications, initialEduQualification]);
  };

  const handleAddHigherEduQualification = () => {
    setHigherEduQualifications([...higherEduQualifications, initialHigherEduQualification]);
  };

  const handleAddProfQualification = () => {
    setProfQualifications([...profQualifications, initialProfQualification]);
  };

  const handleAddProfMembership = () => {
    setProfMemberships([...profMemberships, initialProfMembership]);
  };

  const handleAddWorkExperience = () => {
    setWorkExperiences([...workExperiences, initialWorkExperience]);
  };
  

//-----
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const eduQualificationsData = eduQualifications.map((eduQualification) => ({
      exam: eduQualification.exam,
      stream: eduQualification.stream,
      year: eduQualification.year,
    }));

    const higherEduQualificationsData = higherEduQualifications.map((higherEduQualification) => ({
      prefix: higherEduQualification.prefix,
      degree: higherEduQualification.degree,
      location: higherEduQualification.location,
      start: higherEduQualification.start,
      end: higherEduQualification.end
    }));

    const profQualificationsData = profQualifications.map((profQualification) => ({
      course: profQualification.course,
      institution: profQualification.institution,
      location: profQualification.location,
      start: profQualification.start,
      end: profQualification.end
    }));

    const profMembershipsData = profMemberships.map((profMembership) => ({
      membership: profMembership.membership,
      organization: profMembership.organization,
      year: profMembership.year,
    }));

    const workExperiencesData = workExperiences.map((workExperience) => ({
      company: workExperience.company,
      designation: workExperience.designation,
      location: workExperience.location,
      start: workExperience.start,
      end: workExperience.end,
      description: workExperience.description,
    }));

    const careerSummariesData = careerSummaries.map((careerSummary) => ({
      totalYearsOfExperience: careerSummary.totalYearsOfExperience,
      itLiteracy: careerSummary.itLiteracy,
    }));

  

    const formData = new FormData(event.currentTarget);

    console.log({
      registrationNumber: formData.get('registrationNumber'),
      passCodeNumber: formData.get('passCodeNumber'),
      gender: formData.get('gender'),
      civilStatus: formData.get('civilStatus'),
      softSkills: formData.get('softSkills'),
      hardSkills: formData.get('hardSkills'),
      eduQualifications: eduQualificationsData,
      higherEduQualifications: higherEduQualificationsData,
      profQualifications: profQualificationsData,
      profMemberships: profMembershipsData,
      workExperiences: workExperiencesData,
      careerSummaries: careerSummariesData,
    });  
  };


  return (

    <ThemeProvider theme={theme}>
       <Container component="main" maxWidth="sm">
        <CssBaseline />

        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* <Grid container spacing={2}> */}
            {inputFormElements.form.section.map((input, index) => (
              <Grid key={index} item xs={12} sm={6}>
                {input.type === 'select' ? (
                  <TextField
                    select
                    required={input.required}
                    fullWidth
                    id={input.id}
                    label={input.label}
                    name={input.id}
                    value={data[input.id] || ''}
                    onChange={handleChange}
                  >
                    {input.options.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  
                ) : input.type === 'textarea' ? (
                  <TextField
                    name={input.id}
                    required={input.required}
                    fullWidth
                    multiline
                    sx={{ mt: 1}}
                    rows={4}
                    id={input.id}
                    label={input.label}
                    value={data[input.id] || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <TextField
                    name={input.id}
                    required={input.required}
                    fullWidth
                    sx={{ mt: 1}}
                    id={input.id}
                    label={input.label}
                    value={data[input.id] || ''}
                    onChange={handleChange}
                  />
                )}
              </Grid>
            ))}
          {/* </Grid> */}

            
          {/* <Grid container spacing={2}> */}
            <Grid item xs={12} mt={2}>
              <Typography variant="subtitle1" sx={{backgroundColor: '#1976d2', color: 'white', padding: 1}} >
                SKILLS
              </Typography>
            </Grid>
            {inputFormElements.form.section2.map((input, index) => (
              <Grid key={index} item xs={12} sm={6} >
                  <TextField
                    required={input.required}
                    fullWidth
                    id={input.id}
                    label={input.label}
                    name={input.id}
                    value={data[input.id] || ''}
                    onChange={handleChange}
                  >
                  </TextField> 
              </Grid>
            ))}
          {/* </Grid> */}

          <Grid item xs={12}>
            <Grid item xs={12} mt={2} mb={2}>
              <Typography variant="subtitle1" sx={{backgroundColor: '#1976d2', color: 'white', padding: 1}} >
                EDUCATIONAL QUALIFICATIONS
              </Typography>
            </Grid>
            {eduQualifications.map((qualification, index) => (
              <Grid key={index} container spacing={2}>
                {inputFormElements.form.section3.map((input, subIndex) => (
                  <Grid key={subIndex} item xs={12} sm={6} >
                      <TextField
                        sx={{ mb: 1}}
                        required={input.required}
                        fullWidth
                        id={input.id}
                        label={input.label}
                        name={input.id}
                        value={qualification[input.id] || ''}
                        onChange={(e) => handleEduQualificationsChange(index, input.id, e.target.value)}
                      />
                   </Grid>   
                ))}
              </Grid>
            ))}
            <Button
              variant="contained"
              sx={{ mt: 2, mb: 2}}
              color="primary"
              onClick={handleAddEduQualification}
            >
              + Add 
            </Button>
          </Grid>


          <Grid item xs={12}>
            <Grid item xs={12} mt={2} mb={2}>
              <Typography variant="subtitle1" sx={{backgroundColor: '#1976d2', color: 'white', padding: 1}} >
                HIGHER EDUCATIONAL QUALIFICATIONS
              </Typography>
            </Grid>
            {higherEduQualifications.map((qualification, index) => (
              <Grid key={index} container spacing={2}>
                {inputFormElements.form.section4.map((input, subIndex) => (
                  <Grid key={subIndex} item xs={12} sm={6} >
                      <TextField
                        sx={{ mb: 1}}
                        required={input.required}
                        fullWidth
                        id={input.id}
                        label={input.label}
                        name={input.id}
                        value={qualification[input.id] || ''}
                        onChange={(e) => handleHigherEduQualificationsChange(index, input.id, e.target.value)}
                      />
                   </Grid>   
                ))}
              </Grid>
            ))}
            <Button
              variant="contained"
              sx={{ mt: 2, mb: 2}}
              color="primary"
              onClick={handleAddHigherEduQualification}
            >
              + Add 
            </Button>
          </Grid>


          <Grid item xs={12}>
            <Grid item xs={12} mt={2} mb={2}>
              <Typography variant="subtitle1" sx={{backgroundColor: '#1976d2', color: 'white', padding: 1}} >
                PROFESSIONAL QUALIFICATIONS
              </Typography>
            </Grid>
            {profQualifications.map((qualification, index) => (
              <Grid key={index} container spacing={2}>
                {inputFormElements.form.section5.map((input, subIndex) => (
                  <Grid key={subIndex} item xs={12} sm={6} >
                      <TextField
                        sx={{ mb: 1}}
                        required={input.required}
                        fullWidth
                        id={input.id}
                        label={input.label}
                        name={input.id}
                        value={qualification[input.id] || ''}
                        onChange={(e) => handleProfQualificationsChange(index, input.id, e.target.value)}
                      />
                   </Grid>   
                ))}
              </Grid>
            ))}
            <Button
              variant="contained"
              sx={{ mt: 2, mb: 2}}
              color="primary"
              onClick={handleAddProfQualification}
            >
              + Add 
            </Button>
          </Grid>


          <Grid item xs={12}>
            <Grid item xs={12} mt={2} mb={2}>
              <Typography variant="subtitle1" sx={{backgroundColor: '#1976d2', color: 'white', padding: 1}} >
                PROFESSIONAL MEMBERSHIPS
              </Typography>
            </Grid>
            {profMemberships.map((qualification, index) => (
              <Grid key={index} container spacing={2}>
                {inputFormElements.form.section6.map((input, subIndex) => (
                  <Grid key={subIndex} item xs={12} sm={6} >
                      <TextField
                        sx={{ mb: 1}}
                        required={input.required}
                        fullWidth
                        id={input.id}
                        label={input.label}
                        name={input.id}
                        value={qualification[input.id] || ''}
                        onChange={(e) => handleProfMembershipsChange(index, input.id, e.target.value)}
                      />
                   </Grid>   
                ))}
              </Grid>
            ))}
            <Button
              variant="contained"
              sx={{ mt: 2, mb: 2}}
              color="primary"
              onClick={handleAddProfMembership}
            >
              + Add 
            </Button>
          </Grid>


        <Grid item xs={12}>
            <Grid item xs={12} mt={2} mb={2}>
              <Typography variant="subtitle1" sx={{backgroundColor: '#1976d2', color: 'white', padding: 1}} >
                WORK EXPERIENCE
              </Typography>
            </Grid>
          {workExperiences.map((qualification, index) => (
            <Grid key={index} container spacing={2}>
              {inputFormElements.form.section7.map((input, subIndex) => (
                 <Grid key={subIndex} item xs={12} sm={input.type === 'quill' ? 12 : 6}>
                  
                  {input.type === 'quill' ? (
                    <Grid item xs={12} sx={{ mb: 2}}>
                    <ReactQuill
                      required={input.required}
                      fullWidth
                      id={input.id}
                      label={input.label}
                      name={input.id}
                      value={qualification[input.id] || ''}
                      onChange={(value) => handleWorkExperiencesChange(index, input.id, value)}
                    />
                    </Grid>
                  ) : input.type === 'textarea' ? (
                    
                    <TextField
                      name={input.id}
                      required={input.required}
                      fullWidth
                      multiline
                      rows={4}
                      id={input.id}
                      label={input.label}
                      value={qualification[input.id] || ''}
                      onChange={(e) => handleWorkExperiencesChange(index, input.id, e.target.value)}
                    />
                  ) : (
                    <TextField
                      name={input.id}
                      required={input.required}
                      fullWidth
                      id={input.id}
                      label={input.label}
                      value={qualification[input.id] || ''}
                      onChange={(e) => handleWorkExperiencesChange(index, input.id, e.target.value)}
                    />
                  )}
                </Grid>
                ))}
              </Grid>
            ))}
              <Button
                variant="contained"
                sx={{ mt: 2, mb: 2}}
                color="primary"
                onClick={handleAddWorkExperience}
              >
                + Add 
              </Button>
        </Grid>   

        <Grid item xs={12}>
            <Grid item xs={12} mt={2} mb={2}>
              <Typography variant="subtitle1" sx={{backgroundColor: '#1976d2', color: 'white', padding: 1}} >
                CAREER SUMMARY
              </Typography>
            </Grid>
            {careerSummaries.map((qualification, index) => (
              <Grid key={index} container spacing={2}>
                {inputFormElements.form.section8.map((input, subIndex) => (
                  <Grid key={subIndex} item xs={12} sm={6} >
                      <TextField
                        // sx={{ mb: 1}}
                        required={input.required}
                        fullWidth
                        id={input.id}
                        label={input.label}
                        name={input.id}
                        value={qualification[input.id] || ''}
                        onChange={(e) => handleCareerSummariesChange(index, input.id, e.target.value)}
                      />
                   </Grid>   
                ))}
              </Grid>
            ))}
          </Grid>

          <Grid item sm={3}>
              <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 4, mb: 4}}>
                  Submit
              </Button>
          </Grid>
             
        </Grid>
        </form>
      </Container>
    </ThemeProvider>
  );

    
   }
  
   export default RegistrationForm;