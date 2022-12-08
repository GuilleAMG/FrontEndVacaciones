/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Empleado, 'id'>, schemaOptions: { title: 'NewEmpleado', exclude: [ 'id' ] })
 */
export interface NewEmpleado {
  cargoId?: string;
  disponibilidad?: boolean;
  disponible: string;
  fechaIngreso: string;
  nombre: string;
}
