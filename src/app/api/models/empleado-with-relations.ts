/* tslint:disable */
/* eslint-disable */
import { CargoWithRelations } from './cargo-with-relations';
import { VacacionesWithRelations } from './vacaciones-with-relations';

/**
 * (tsType: EmpleadoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EmpleadoWithRelations {
  cargo?: CargoWithRelations;
  cargoId?: string;
  disponibilidad?: boolean;
  disponible: string;
  fechaIngreso: string;
  id: string;
  nombre: string;
  vacaciones?: Array<VacacionesWithRelations>;
}
