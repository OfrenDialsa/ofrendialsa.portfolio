import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { Object3DNode } from '@react-three/fiber';
import * as THREE from 'three';

// Deklarasi modul meshline (untuk import)
declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

// Deklarasi JSX agar <meshLineGeometry /> dan <meshLineMaterial /> dikenali
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
      meshLineMaterial: Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
    }
  }
}

export {};
