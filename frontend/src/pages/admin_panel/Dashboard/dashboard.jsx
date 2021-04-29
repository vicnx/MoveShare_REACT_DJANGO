import './dashboard.css'
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect, useState } from 'react';
// import EditUserModal from './EditUser/admin.editUsers';
import ModalCategory from 'components/panel_admin/categories/ModalCategory'
import CategoriesService from "services/categories.service";
import AddIcon from '@material-ui/icons/Add';
import Loading from 'react-simple-loading';
import {useCategories} from 'hooks/useCategories'
import useUser from 'hooks/useUser'
import MSalert from 'components/alerts/alert'
import Counter from 'components/panel_admin/dashboard/Counter'
import {UserService} from 'services/user.service.jsx'
import GroupIcon from '@material-ui/icons/Group';
import ExercicesService from 'services/exercices.service';
import WorkoutsService from 'services/workouts.service';
import CategoryIcon from '@material-ui/icons/Category';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import {  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  HorizontalBarSeriesCanvas} from 'react-vis';
import { useHistory } from "react-router-dom";




const DashBoard = () => {
    const {deleteCategory,ok,error,setError} = useCategories(false)
    const [ allusersCount, setAllUsersCount ] = useState("0");
    const [ CategoriesAdminCount , setCategoriesAdminCount ] = useState("0");
    const [ ExercicesAdminCount , setExercicesAdminCount ] = useState("0");
    const [ WorkoutsAdminCount , setWorkoutsAdminCount ] = useState("0");
    const [loading, setLoading] = useState(true)
  let history = useHistory();

    

    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];

    const BarSeries = HorizontalBarSeries


    useEffect(() => {
      UserService.getListUsers().then(({data})=>{
        setAllUsersCount(data.count)
        setLoading(false)
      })
      CategoriesService.query().then(({data})=>{
        setCategoriesAdminCount(data.count)
        setLoading(false);
      })
      ExercicesService.query().then(({data})=>{
        setExercicesAdminCount(data.count)
        setLoading(false);
      })
      WorkoutsService.query().then(({data})=>{
        setWorkoutsAdminCount(data.count)
        setLoading(false);
      })

    }, [])

    const goTo = (route)=>{
      history.push(route)
    }

    return (
      <>
      <div className="dashboard_page">
        <div className="counter_list">
          <Counter count={allusersCount} text={"USUARIOS"} icono={<GroupIcon/>} color="blue" action={()=>{goTo('users')}}/>
          <Counter count={CategoriesAdminCount} text={"CATEGORIAS"} icono={<CategoryIcon/>} color="green" action={()=>{goTo('categories')}}/>
          <Counter count={ExercicesAdminCount} text={"EJERCICIOS"} icono={<ShoppingBasketIcon/>} color="red" action={()=>{goTo('exercices')}}/>
          <Counter count={WorkoutsAdminCount} text={"ENTRENAMIENTOS"} icono={<FitnessCenterIcon/>} color="purple" action={()=>{goTo('workouts')}}/>
          <Counter count={100000} text={"TEST LONG"} icono={<FitnessCenterIcon/>} color="purple"/>
        </div>
        <div className="charts">
        <XYPlot width={300} height={300} stackBy="x">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries data={[{y: 2, x: 10}, {y: 4, x: 5}, {y: 5, x: 15}]} />
          <BarSeries data={[{y: 2, x: 12}, {y: 4, x: 2}, {y: 5, x: 11}]} />
        </XYPlot>
        </div>
      </div>


      </>

    )
}

export default DashBoard