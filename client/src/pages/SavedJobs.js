// savedjobs / profile view
import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../utils/auth';
import { searchCareerJobs } from '../utils/API';
import { saveJobIds, getSavedJobIds } from '../utils/localStorage';
//import {REMOVE_BOOK, SAVE_BOOK, ADD_USER, LOGIN_USER} from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {SAVE_JOB} from '../utils/mutations';
//import {LOGIN_USER} from '../utils/mutations';
