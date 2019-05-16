/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import { createTypes } from 'utils/redux'
import { SQL_STRING_TYPES, SQL_NUMBER_TYPES, SQL_DATE_TYPES, SQL_TYPES } from 'app/globalConstants'

enum Types {
  LOAD_VIEWS = 'davinci/View/LOAD_VIEWS',
  LOAD_VIEWS_SUCCESS = 'davinci/View/LOAD_VIEWS_SUCCESS',
  LOAD_VIEWS_FAILURE = 'davinci/View/LOAD_VIEWS_FAILURE',

  LOAD_VIEW_DETAIL = 'davinci/View/LOAD_VIEW_DETAIL',
  LOAD_VIEW_DETAIL_SUCCESS = 'davinci/View/LOAD_VIEW_DETAIL_SUCCESS',
  LOAD_VIEW_DETAIL_FAILURE = 'davinci/View/LOAD_VIEW_DETAIL_FAILURE',

  ADD_VIEW = 'davinci/View/ADD_VIEW',
  ADD_VIEW_SUCCESS = 'davinci/View/ADD_VIEW_SUCCESS',
  ADD_VIEW_FAILURE = 'davinci/View/ADD_VIEW_FAILURE',

  DELETE_VIEW = 'davinci/View/DELETE_VIEW',
  DELETE_VIEW_SUCCESS = 'davinci/View/DELETE_VIEW_SUCCESS',
  DELETE_VIEW_FAILURE = 'davinci/View/DELETE_VIEW_FAILURE',

  EDIT_VIEW = 'davinci/View/EDIT_VIEW',
  EDIT_VIEW_SUCCESS = 'davinci/View/EDIT_VIEW_SUCCESS',
  EDIT_VIEW_FAILURE = 'davinci/View/EDIT_VIEW_FAILURE',

  EXECUTE_SQL = 'davinci/View/EXECUTE_SQL',
  EXECUTE_SQL_SUCCESS = 'davinci/View/EXECUTE_SQL_SUCCESS',
  EXECUTE_SQL_FAILURE = 'davinci/View/EXECUTE_SQL_FAILURE',

  UPDATE_EDITING_VIEW = 'davinci/View/UPDATE_EDITING_VIEW',
  UPDATE_EDITING_VIEW_INFO = 'davinci/View/UPDATE_EDITING_VIEW_INFO',

  SET_SQL_LIMIT = 'davinci/View/SET_SQL_LIMIT',
  RESET_VIEW_STATE = 'davinci/View/RESET_VIEW_STATE',

  /** Actions for external usages */
  LOAD_CASCADE_VIEW_DATA = 'davinci/View/LOAD_CASCADE_VIEW_DATA',
  LOAD_CASCADE_VIEW_DATA_SUCCESS = 'davinci/View/LOAD_CASCADE_VIEW_DATA_SUCCESS',
  LOAD_CASCADE_VIEW_DATA_FAILURE = 'davinci/View/LOAD_CASCADE_VIEW_DATA_FAILURE',

  LOAD_VIEW_DATA = 'davinci/View/LOAD_VIEW_DATA',
  LOAD_VIEW_DATA_SUCCESS = 'davinci/View/LOAD_VIEW_DATA_SUCCESS',
  LOAD_VIEW_DATA_FAILURE = 'davinci/View/LOAD_VIEW_DATA_FAILURE',

  LOAD_VIEW_DISTINCT_VALUE = 'davinci/View/LOAD_VIEW_DISTINCT_VALUE',
  LOAD_VIEW_DISTINCT_VALUE_SUCCESS = 'davinci/View/LOAD_VIEW_DISTINCT_VALUE_SUCCESS',
  LOAD_VIEW_DISTINCT_VALUE_FAILURE = 'davinci/View/LOAD_VIEW_DISTINCT_VALUE_FAILURE',

  LOAD_VIEW_DATA_FROM_VIZ_ITEM = 'davinci/View/LOAD_VIEW_DATA_FROM_VIZ_ITEM',
  LOAD_VIEW_DATA_FROM_VIZ_ITEM_SUCCESS = 'davinci/View/LOAD_VIEW_DATA_FROM_VIZ_ITEM_SUCCESS',
  LOAD_VIEW_DATA_FROM_VIZ_ITEM_FAILURE = 'davinci/View/LOAD_VIEW_DATA_FROM_VIZ_ITEM_FAILURE'
  /**  */
}

export const ActionTypes = createTypes(Types)

export enum ViewVariableTypes {
  Query = 'query',
  Authorization = 'auth'
}

export const ViewVariableTypesLocale = {
  [ViewVariableTypes.Query]: '查询变量',
  [ViewVariableTypes.Authorization]: '权限变量'
}

export enum ViewVariableValueTypes {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Date = 'date'
}

export const ViewVariableValueTypesLocale = {
  [ViewVariableValueTypes.String]: '字符串',
  [ViewVariableValueTypes.Number]: '数字',
  [ViewVariableValueTypes.Boolean]: '布尔',
  [ViewVariableValueTypes.Date]: '日期'
}

export enum ViewModelTypes {
  Category = 'category',
  Value = 'value'
}

export const ModelTypeSqlTypeSetting = {
  [ViewModelTypes.Value]: SQL_NUMBER_TYPES,
  [ViewModelTypes.Category]: SQL_TYPES
}

export const ViewModelTypesLocale = {
  [ViewModelTypes.Category]: '维度',
  [ViewModelTypes.Value]: '指标'
}

export enum ViewModelVisualTypes {
  Number = 'number',
  String = 'string',
  Date = 'date',
  GeoCountry = 'geoCountry',
  GeoProvince = 'geoProvince',
  GeoCity = 'geoCity'
}

export const VisualTypeSqlTypeSetting = {
  [ViewModelVisualTypes.Number]: SQL_NUMBER_TYPES,
  [ViewModelVisualTypes.String]: SQL_STRING_TYPES,
  [ViewModelVisualTypes.Date]: SQL_DATE_TYPES
}

export const ViewModelVisualTypesLocale = {
  [ViewModelVisualTypes.Number]: '数字',
  [ViewModelVisualTypes.String]: '字符',
  [ViewModelVisualTypes.Date]: '日期',
  [ViewModelVisualTypes.GeoCountry]: '地理国家',
  [ViewModelVisualTypes.GeoProvince]: '地理省份',
  [ViewModelVisualTypes.GeoCity]: '地理城市'
}

export const DEFAULT_SQL_LIMIT = 500
export const DEFAULT_SQL_PREVIEW_PAGE_SIZE = 100
export const SQL_PREVIEW_PAGE_SIZE_OPTIONS = [100, 200, 500, 1000]