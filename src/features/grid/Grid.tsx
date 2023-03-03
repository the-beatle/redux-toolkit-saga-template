import React, {useMemo, useRef, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {ColDef,} from 'ag-grid-community';
import styles from './grid.module.css';

interface IData {
    code: string;
    message: string;
}

const columns: ColDef[] = [
    {headerName: 'ID (Style(S)-Style-Color(SC)-Sku)', field: 'code', sortable: false, filter: false},
    {headerName: 'Error Message', field: 'message', sortable: false, filter: false},
]

const rows = [
    {
        code: "Sku-3184488855",
        message: "An Approved price change for this item/location/date already exists. (Conflicting regular id 84048839)",
    },
]

const Grid = () => {
    const gridRef = useRef<AgGridReact<IData>>(null);
    const containerStyle = useMemo(() => ({width: '100%', height: '100%'}), []);
    const gridStyle = useMemo(() => ({height: '100%', width: '100%'}), []);
    const [rowData, setRowData] = useState<IData[]>(rows)
    const [columnDefs, setColumnDefs] = useState<ColDef[]>(columns);

    return (
        <div style={containerStyle}>
            <div className={styles.container}>
                <div style={gridStyle} className="ag-theme-alpine">
                    <AgGridReact<IData>
                        ref={gridRef}
                        rowData={rowData}
                        columnDefs={columnDefs}
                    ></AgGridReact>
                </div>
            </div>
        </div>
    );
};

export default Grid;


