import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

import {exerciseOptions, youtubOptions, fetchData} from '../utils/fetchData'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetails = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams()
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);

      setTargetMuscleExercises(targetMuscleExercisesData)

      const equipmentMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);

      setEquipmentExercises(equipmentMuscleExercisesData)
    }
    fetchExercisesData()
  },[id])
    

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetails