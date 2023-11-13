import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../../Redux/store";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { IAddRevenueCategory, IRevenueCategory } from "../../Model/IRevenue";

const UpdateRevenue: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const revenueReduxState: RevenueReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[RevenueReducer.revenueFeatureKey];
    }
  );
  const { Rcategory } = revenueReduxState;
  const { id } = useParams();

  const [createrev, setcreaterev] = useState<IRevenueCategory>({
    revenue_category_id: "",
    revenue_category_name: "",
  });

  useEffect(() => {
    if (id) {
      dataFromServer(id);
    }
  }, [id]);

  useEffect(() => {
    if (Rcategory && Object.keys(Rcategory).length > 0) {
      setcreaterev({
        ...createrev,
        revenue_category_id: Rcategory.revenue_category_id,
        revenue_category_name: Rcategory.revenue_category_name,
      });
    }
  }, [Rcategory]);

  const dataFromServer = (id: string) => {
    dispatch(RevenueAction.getRevenueCategoryByIdAction({ id: id }));
  };
  const Navigate = useNavigate();

  const changeInputEvent = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setcreaterev({
      ...createrev,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // alert("Revenue Added Successfully");

    let updateData: IAddRevenueCategory = {
      revenueCategoryName: createrev.revenue_category_name,
    };

    dispatch(
      RevenueAction.updateRevenueCategoryAction({
        updateData,
        id,
      })
    ).then((res: any) => {
      if (res && !res.error) {
        Navigate("/getrevenue");
      }
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h3 text-success">Update Revenue Category</div>
            <div className="p fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              nostrum amet facilis reiciendis aperiam ducimus consequuntur,
              commodi laboriosam architecto doloribus, repellendus, ab
              aspernatur adipisci numquam fugit velit omnis eaque ipsa. Ullam,
              consequatur et quaerat amet eos accusamus pariatur? Accusamus,
              amet. Voluptatem quasi voluptatibus dolores. Facere odio sint
              numquam tempore exercitationem earum, alias eaque ut porro
              laudantium deleniti corporis repellat nulla eveniet nihil
              obcaecati quas soluta dolorum asperiores in ex aliquid possimus
              error voluptate! Quaerat incidunt voluptatem,
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card p-3">
              <div className="card-header bg-warning ">
                <h3>Update Revenue Category</h3>
              </div>
              <form onSubmit={(e) => submitData(e)}>
                <div className="mb-2">
                  <label className="form-label">
                    Enter Revenue Category Name
                  </label>
                  <input
                    type="text"
                    name="revenue_category_name"
                    value={createrev.revenue_category_name}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    className="form-control"
                    placeholder="Enter Revenue Category"
                  />
                </div>

                <div className="mt-3">
                  <button type="submit" className="btn btn-outline-success">
                    Submit
                  </button>

                  <button type="reset" className="btn btn-outline-danger">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateRevenue;
