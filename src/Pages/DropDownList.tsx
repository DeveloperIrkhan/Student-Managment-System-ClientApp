import * as React from "react";

interface Props {
	title: string;
	value: string;
	list: { value: string; state: string }[];
	onChange?: (value: string) => void;
}

interface State {}

export class DropDownList extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	render() {
		const {  title, value, list } = this.props;
		return (
			<>
				<div className="" style={{ paddingTop: "1vw" }}>
					<div className="col-12 p-0 text-left">
						<h6 className="text-muted f-20b">
							{title}
						</h6>

						<div className="col-12 p-0 text-left" style={{ zIndex: 999 }}>
							<div className="">
								<div className="texessbox mb-3" id="usrentery" style={{ height: "58px", borderRadius: "38.5px", paddingLeft: "32px", paddingRight: "32px" }}>
									<select
										value={value}
										name={title}
										className="dropdown-title myInput border-3 form-select-lg  d-inline-block"
										
										aria-label=".form-select-lg">
										{list?.length > 0 &&
											list?.map((item, i) => {
												return (
													<option key={i} value={item.value}>
														&nbsp; {item.state}
													</option>
												);
											})}
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
