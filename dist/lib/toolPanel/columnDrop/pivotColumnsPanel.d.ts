// ag-grid-enterprise v11.0.0
import { Column } from "ag-grid/main";
import { AbstractColumnDropPanel } from "./abstractColumnDropPanel";
export declare class PivotColumnsPanel extends AbstractColumnDropPanel {
    private columnController;
    private eventService;
    private gridOptionsWrapper;
    private context;
    private loggerFactory;
    private dragAndDropService;
    constructor(horizontal: boolean);
    private passBeansUp();
    private refresh();
    private checkVisibility();
    protected isColumnDroppable(column: Column): boolean;
    protected updateColumns(columns: Column[]): void;
    protected getIconName(): string;
    protected getExistingColumns(): Column[];
}
