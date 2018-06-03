export class Address {
  constructor(
    public Warehouses: string,
    public MainDescription: string,
    public Area: string,
    public Region: string,
    public SettlementTypeCode: string,
    public Ref: string,
    public DeliveryCity: string,
    public StreetsAvailability: string,
    public ParentRegionTypes: string,
    public ParentRegionCode: string,
    public RegionTypes: string,
    public RegionTypesCode: string
  ) {}
}
