# Kuch basics baate jo is project me pata chali 

1. hr tag <hr/>  isse do line ka diveder hota hai agar do line ke beech me kuch likhna hai to hr upar aur niche

## Example

``` 
 <hr className="flex-1 border-gray-600" />
          <span className="text-gray-400">or</span>
          <hr className="flex-1 border-gray-600" />
          ```




          # useNavigate

        ``` jsx
        Step 1: Import
    import { useNavigate } from "react-router-dom";
```
    ```
    Step 2: Navigate function बनाओ
    const navigate = useNavigate();
    ```
    ```
    Step 3: जहां जाना है वहाँ navigate("path") लिख दो
    navigate("/login");
    ```